let list = document.querySelector("#infi-list")

const {scrollTop, scrollHeight, clientHeight} = list
list.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
<li>Item 7</li>
<li>Item 8</li>
<li>Item 9</li>
<li>Item 10</li>
`
let counter = 10
list.addEventListener("scroll", () => {
	if(scrollTop + clientHeight >= scrollHeight){
	list.innerHTML += `
	<li>Item ${++counter}</li>
	<li>Item ${++counter}</li>
	`
}
})

