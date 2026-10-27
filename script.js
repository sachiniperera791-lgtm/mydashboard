let months=["Jan","Feb","Mar","Apr","May","Jun"];
let revenue=[1250,1180,1420,1610,1550,1780];
let units=[3400,3150,3900,4300,4050,4700];
let branches=["Colombo","Kandy","Galle"];
let branchRevenue=[2430,1320,1170];
 
let totalRevenue=0;
let totalUnits=0;

for(let i =0; i< revenue.length;i++){
    totalRevenue+=revenue[i];
    totalUnits+=units[i];
}
let bestIndex=0;
for(let i=1;i<revenue.length;i++){
    if(revenue[i]> revenue[bestIndex]){
            bestIndex=i;
        }
}
let branchIndex=0;
for(let i=1;i<branchRevenue.length;i++){
    if(branchRevenue[i]>
        branchRevenue[branchIndex]){
            branchIndex=i;
        }
    }

document.getElementById("revenue").textContent="Rs."+totalRevenue;
document.getElementById("units").textContent=totalUnits;
document.getElementById("month").textContent=months[bestIndex];
document.getElementById("branch").textContent=branches[branchIndex];


   
new Chart(document.getElementById("lineChart"),{
    type:"line",
    data:{
        labels:months,
        datasets:[{
            label:"monthly revenue",
            data:revenue,
            borderColor:" blue",
            backgroundColor:"lightblue",
            fill:true
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:true,
        animation:false,
        scales:{
            x:{
                title:{
                    display:true,
                    text:"Month"
                    
                    
                }
        },
        y:{
            title:{
                display:true,
                text:"Revenue(LKR '000)"
            }
            }
        }
    }
});
new Chart(document.getElementById("barChart"),{
    type:"bar",
    data:{
        labels:branches,
        datasets:[{
            label:"Q2 Revenue",
            data:branchRevenue,
            backgroundColor:["#4359b0","#3f53a5","#3f53a5"]
        }]
    },
    options:{
        responsive:true,
        maintainAspectRatio:true,
        animation:false,
        scales:{
            x:{
                title:{
                    display:true,
                    text:"Branch"
                    
                }
            },
            y:{
                title:{
                    display:true,
                    text:"Revenue(LKR'000)"
                }
            }
        }
    }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});