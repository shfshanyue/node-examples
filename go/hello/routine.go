package main

import "fmt"

func hello() {
	fmt.Println("hello, shanyue")
}

func main() {
	hello()
	go hello()
	fmt.Println("main function")
}
