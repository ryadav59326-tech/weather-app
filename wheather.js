async function btn()
{
    try
    {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=427efa63cda9a0d3a9a760aefb8c3aaa`)
        const data=await response.json()
        console.log(data)
           
    }
    catch (error)
    {
        console.error(error)
    }   
}