const button = document.getElementById("report");

        button?.addEventListener("click", () => {


            const dialog = document.querySelector("dialog");

            dialog?.setAttribute("open", "true")

        })

        const close = document.getElementById("close");

        close?.addEventListener("click", () => {
            const dialog = document.querySelector("dialog");

            dialog?.removeAttribute("open")
        })

        const submit = document.getElementById("submit");

        submit?.addEventListener("click", () => {

            event?.preventDefault()

            const dialog = document.querySelector("dialog");
            const ruta = document.getElementById("ruta");
            const user = document.getElementById("user");
            const message = document.getElementById("message");

            if(ruta.value === "") {
                return alert("Debes escribir algo en tu ruta")
            }

            if(user.value === "") {
                return alert("Debes escribir algo en tu usuario")
            }

            if(message.value === "") {
                return alert("Debes escribir algo en tu mensaje")
            }

            const webhook = "https://discord.com/api/webhooks/1286940805302321173/0h_ozpkPQssFco1fUaqAWkpx8p78EzGxmZTtjbUlR5f7X58OLqgfZ2sguS1XvBxnUZie"

            let embed = {
                "title": "> Nueva ruta reportada",
                "color": 0xff0000,
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/attachments/1260400824522244159/1286206079650500649/IMG_1594.png?ex=66ef0a81&is=66edb901&hm=57564ab06f81ea6f1304c4495c80bc0a42dccf28cfd37cae0171784bc11b5cec&"
                },
                "author": {
                    "name": user.value
                },
                "footer": {
                    "text": "Formulario recibido desde Rabbit Web"
                },
                "fields": [
                    {
                        "name": "Ruta",
                        "value": ruta.value
                    },
                    {
                        "name": "Usuario",
                        "value": user.value
                    },
                    {
                        "name": "Mensaje",
                        "value": message.value
                    }
                ]
            }

            const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');


    const params = {
        
        embeds: [embed]
    }

    request.send(JSON.stringify(params));  

    dialog?.removeAttribute("open")
    return alert("Tu reporte de ruta fue enviado correctamente")
    

          

            })
