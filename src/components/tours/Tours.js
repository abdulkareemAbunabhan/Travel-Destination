const data=require("../../data/db.json")
function Tours (){
return(
<>
{data.map((item)=>{
    return(
        <div key={item.id}>
    <h3>{item.name}</h3>
    <img src={item.image} alt={item.name}></img>
    <hr></hr>
</div>
    )
    

})}
</>
)
}
export default Tours; 