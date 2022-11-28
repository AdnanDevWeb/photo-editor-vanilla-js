const image_input = document.querySelector("#file");
const canvas = document.querySelector(".canvas")
const imgToEdit = document.querySelector("#imgToEdit")

const inputRange = document.querySelectorAll('input')
console.log(inputRange);

for(let i = 0 ; i <inputRange.length ; i++){
    inputRange[i].addEventListener('change' , (e)=>{
        console.log(e.target.value);
    })
}


image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;

      imgToEdit.src=uploaded_image

    });
    reader.readAsDataURL(this.files[0]);
  });

