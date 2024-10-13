document.addEventListener("DOMContentLoaded", () => {
    if (document.body.clientWidth <= 1000) {
        const nums = document.body.querySelectorAll(".num")
        if (nums) {
            nums.forEach(num => {
                num.addEventListener("click", function () {
                    num.href = "tel:+998998531616"
                })
            })
        }
    }
})
