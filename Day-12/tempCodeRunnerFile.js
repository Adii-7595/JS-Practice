
fetch('https://invalid-url.example')
    .then(response => {
        if(!response.json){
            throw new Error('Server Error');
        }else{
            return response.json()
        }
    })
    .then(data => console.log(data))
    .catch(error=>{
        console.error('problem with fetching api: ', error)
    });

