// membuat perubahan warna pada background nav2 

// mengambil class nav2
const nav2 = document.querySelector('.nav2') 

// membuat event mousemove pada nav2
nav2.addEventListener('mousemove', function(event){
	const xPos = Math.round((event.clientX / window.innerWidth) *250)
	const yPos = Math.round((event.clientY / window.innerHeight) *250)
	nav2.style.backgroundColor= 'rgb(150, '+xPos+','+yPos+')'
});