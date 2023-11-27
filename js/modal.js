document.addEventListener("DOMContentLoaded", function () {

    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var btnLab = document.getElementById("btnLaboratorio");
    var btnRad = document.getElementById("btnRadiologia");
    var btnAmb = document.getElementById("btnAmbos");

    function closeModal() {
        modal.style.display = "none";
    }

    function modalBienvenida() {
        modal2.style.display = "block";
        setTimeout(function () {
            modal2.style.display = "none";
        }, 3000);
    }

    function botonesTipo(tipoServicio, urlNormal, urlPreferencial){
        modal.style.display = "block";
        document.getElementById("btnNormal").onclick = function () {
            getRequest(tipoServicio, urlNormal);
            closeModal();
            modalBienvenida();           
        };
        document.getElementById("btnPreferencial").onclick = function () {
            getRequest(tipoServicio, urlPreferencial);
            closeModal();
            modalBienvenida();
        };
    }

    btnLab.addEventListener("click", function () {
        tipoServicio = 'Laboratorio'
        let urlNormal = 'http://turnero:5000/ticket/0?preferente=0';
        let urlPreferencial  = 'http://turnero:5000/ticket/0?preferente=1';
        botonesTipo(tipoServicio, urlNormal, urlPreferencial);
    });

    btnRad.addEventListener("click", function () {
        tipoServicio = 'Laboratorio'
        let urlNormal = 'http://turnero:5000/ticket/0?preferente=0';
        let urlPreferencial  = 'http://turnero:5000/ticket/0?preferente=1';
        botonesTipo(tipoServicio, urlNormal, urlPreferencial);
    });

    btnAmb.addEventListener("click", function () {
        tipoServicio = 'Laboratorio'
        let urlNormal = 'http://turnero:5000/ticket/0?preferente=0';
        let urlPreferencial  = 'http://turnero:5000/ticket/0?preferente=1';
        botonesTipo(tipoServicio, urlNormal, urlPreferencial);
    });

    // cambiar a ontouchstart?
    document.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    function getRequest(tipoServicio, tipoTurno) {
        var url;
        if (tipoServicio === "Laboratorio") {
            url = tipoTurno === "Normal"
                ? "http://turnero:5000/ticket/0?preferente=0"
                : "http://turnero:5000/ticket/0?preferente=1";
        } else if (tipoServicio === "Radiologia") {
            url = tipoTurno === "Normal"
                ? "http://turnero:5000/ticket/1?preferente=0"
                : "http://turnero:5000/ticket/1?preferente=1";
        } else if (tipoServicio === "Ambos") {
            url = tipoTurno === "Normal"
                ? "http://turnero:5000/ticket/2?preferente=0"
                : "http://turnero:5000/ticket/2?preferente=1";
        }
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

});