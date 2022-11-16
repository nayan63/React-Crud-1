export const addApi = async(data)=>{
    
    const response = await fetch("http://localhost:3001/posts",{
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}
export const listApi = async()=>{
    
    const response = await fetch("http://localhost:3001/posts");

    const result = await response.json();
    
    return result;
}

export const getPostApi = async(id)=>{
    
    const response = await fetch("http://localhost:3001/posts/"+id);

    const result = await response.json();
    
    return result;
}

export const updatePostApi = async(data)=>{
    
    const response = await fetch("http://localhost:3001/posts/"+data.id,{
        method: "PUT",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export const deletePostApi = async(id)=>{
    
    const response = await fetch("http://localhost:3001/posts/"+id,{
        method: "DELETE",
        headers:{'Content-Type':'application/json'}
    });

    const result = await response.json();
    return result;
}