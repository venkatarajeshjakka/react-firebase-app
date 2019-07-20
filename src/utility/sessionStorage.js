
export const  setPersistantState = (key,value) =>
{
    if(!sessionStorage.getItem(key))
    {
        sessionStorage.setItem(key,JSON.stringify(value));
    }
};

export const  getPersistantState = (key) =>
{
    if(sessionStorage.getItem(key))
    {
        var parsedData = JSON.parse(sessionStorage.getItem(key));
        return parsedData;
    }else
    {
        return null;
    }
};

export const  updatePersistantState = (key,data) =>
{
    if(sessionStorage.getItem(key))
    {   
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key,JSON.stringify(data));
    }
};

export const hasPersistantState = (key) =>
{
    return sessionStorage.getItem(key) ? true : false;
}

export const clearPersistantState = (key) =>
{
    if(sessionStorage.getItem(key))
    {   
        sessionStorage.removeItem(key);
    }
}

