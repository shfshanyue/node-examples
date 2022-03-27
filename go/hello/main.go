package main

import "fmt"

const (
	RED = iota
	GREEN
	BLUE
)

func main() {
	// 赋值
	var a int = 10
	fmt.Println(a)

	// 指针
	var p *int = &a
	*p = 11
	fmt.Println(a)

	// Rune -> int32
	fmt.Println(len("🍉🍇🍑🍓🥝"))
	fmt.Println(len([]rune("🍉🍇🍑🍓🥝")))

	// map
	var o = map[string]int{
		"a": 3,
		"b": 4,
	}
	fmt.Println(o)

	// 判断是否存在某个 key
	if v, ok := o["a"]; ok {
		fmt.Println("a exist", v)
	}

	fmt.Println(RED)
}
