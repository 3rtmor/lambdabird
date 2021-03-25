package main

import (
	"log"
	"math/rand"
	"os"
	"os/signal"
	"time"

	"github.com/Pallinder/go-randomdata"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func main() {
	app := fiber.New()
	rand.Seed(time.Now().UnixNano())

	app.Use(recover.New())
	app.Use(cors.New())

	app.Get("/male", func(c *fiber.Ctx) error {
		competitors := make([]Competitor, 20)
		generateList(competitors, 0)
		return c.Status(200).JSON(fiber.Map{"status": "success", "data": competitors})
	})
	app.Get("/female", func(c *fiber.Ctx) error {
		competitors := make([]Competitor, 20)
		generateList(competitors, 1)
		return c.Status(200).JSON(fiber.Map{"status": "success", "data": competitors})
	})

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		<-c
		exit(app)
	}()
	log.Fatal(app.Listen(":8000"))
}

func exit(app *fiber.App) {
	_ = app.Shutdown()
}

type Competitor struct {
	Name  string `json:"name"`
	Place int    `json:"place"`
	Hit   int    `json:"hit"`
	Rate  int    `json:"rate"`
}

func generateCompetitor(p int, g int) (c Competitor) {
	switch {
	case 20-p < 5:
		c.Hit = rand.Intn(3-1) + 2
		c.Rate = rand.Intn(260-250) + 250
	case 20-p >= 5 && 20-p < 15:
		c.Hit = rand.Intn(4-2) + 3
		c.Rate = rand.Intn(270-260) + 260
	case 20-p >= 15:
		c.Hit = rand.Intn(5-3) + 4
		c.Rate = rand.Intn(280-270) + 270
	}
	c.Name = randomdata.FullName(g)
	c.Place = p
	return
}

func generateList(c []Competitor, g int) []Competitor {
	for i := 0; i < len(c); i++ {
		c[i] = generateCompetitor(i+1, g)
		if i != 0 {
			if c[i].Rate > c[i-1].Rate {
				c[i].Rate = c[i-1].Rate - 1
			}
		}
	}
	return c
}
