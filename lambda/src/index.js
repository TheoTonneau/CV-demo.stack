exports.handler = async (event) => {
    try {
        // Vérifier si le body existe
        if (!event.body) {
            throw new Error("Le corps de la requête est vide");
        }

        // Récupérer le body de l'événement
        let body;

        // Si le body est encodé en base64, il faut le décoder
        if (event.isBase64Encoded) {
            body = JSON.parse(Buffer.from(event.body, 'base64').toString('utf-8'));
        } else {
            body = JSON.parse(event.body);
        }

        // Vérifier si la valeur "value" existe dans le body
        if (!body.value) {
            throw new Error("La clé 'value' est manquante dans le corps de la requête");
        }

        // Récupérer la valeur spécifique du body
        const value = body.value;

        // Structure de la réponse en cas de succès
        const response = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Valeur reçue avec succès",
                value: value  // Renvoie la valeur reçue
            })
        };

        return response;

    } catch (error) {
        // Structure de la réponse en cas d'erreur
        const response = {
            statusCode: error.message.includes('corps de la requête') ? 400 : 500,  // 400 pour erreurs client, 500 pour erreurs serveur
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Erreur",
                error: error.message
            })
        };

        return response;
    }
};
