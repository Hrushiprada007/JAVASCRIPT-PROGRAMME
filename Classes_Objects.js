const student = {
    name: "HrushiPrada",
    Marks: 89.5,
    class:"PG",
    printmarks: function(){
        console.log("marks:", this.Marks);
        console.log("Name:", this.name);
        console.log("Class:",this.class);
    }
}
student.printmarks();