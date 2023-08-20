// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

let sum = 0;
const num = [];

function summary() {
    let input = prompt("Enter your number");
    if (input !== null || input !== Number(input) || input !== isNaN) {
        sum = sum + input
    } else {console.log(sum)}
    
}



console.log(summary);



///////////////// ยังทำไม่ได้