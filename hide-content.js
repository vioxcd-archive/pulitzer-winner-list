// random function used to make copying the content of the site easier
function hide_stuffs() {
  // stuffs = finalist label, finalist rows, and citation
	lbfn = document.querySelectorAll(".table-label-finalists")
	lbfn.forEach(l => { l.style.display = "none" })
	
	lp = document.querySelectorAll(".table-finalists")
	lp.forEach(l => { l.style.display = "none" })
	
	ct = document.querySelectorAll(".citation")
	ct.forEach(l => { l.style.display = "none" })
}
