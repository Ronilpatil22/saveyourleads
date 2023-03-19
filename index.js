// function save(){
//     console.log("The button has been clicked")
// }
let inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul_el")
let myLeads=[]
let saved=document.getElementById("input-btn")
let lads=JSON.parse(localStorage.getItem("Leads"))
let delete_btn=document.getElementById("delete-btn")
let tab_btn=document.getElementById("tab-btn")
if(lads){
    myLeads=lads
    renderleads()
}
saved.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("Leads",JSON.stringify(myLeads))
    renderleads()
    inputEl.value=""
})

function renderleads(){
    let listitems=""
    for(let i=0;i<myLeads.length;i++){
        listitems+="<li><a href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML=listitems
}

delete_btn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    ulEl.innerHTML=""
    renderleads()
})

tab_btn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("Leads",JSON.stringify(myLeads))
        renderleads()
    });
})

