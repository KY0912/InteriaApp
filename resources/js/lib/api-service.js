const apiBase = "/api";

export const getInteriors = async function () {
    const response = await fetch(`${apiBase}/interiors`);
    return response.json();
};

export const getMyInteriors = async function () {
    const response = await fetch(`${apiBase}/interiors/mine`);
    return response.json();
};

export const getInterior = async function(interiorId) {
    const response = await fetch(`${apiBase}/interiors/${interiorId}`);
    return response.json();
};

export const getMessage = async function(messageId) {
    const response = await fetch(`${apiBase}/interiors/${messageId}`);
    return response.json();
};

export const postInterior = async function (data) {
    const response = await fetch(`${apiBase}/interiors`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "multipart/form-data",
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    return response.json();
};

export const updateInterior = async function (interiorId, data) {
    const response = await fetch(`${apiBase}/interiors/${interiorId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "multipart/form-data",
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }
    });
    return response.json();
};

export const deleteInterior = async function(interiorId) {
    const response = await fetch(`${apiBase}/interiors/${interiorId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
};