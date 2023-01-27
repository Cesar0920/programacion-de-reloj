setInterval(() => {
    let fecha = new Date();
    const meses = [];
    const dias = [];
    const mes = meses[fecha.getMonth()];
    const dia = dias[fecha.getDay]
    const diaN = fecha.getDate();
    const diat = (String(fecha.getDay()).length ==2) ? fecha.getDay() : `0${fecha.getDay() }`;
    const horas = (String(fecha.getHours()).length ==2) ? fecha.getHours() : `0${fecha.getHours() }`;
    const minutos = (String(fecha.getMinutes()).length ==2) ? fecha.getMinutes() : `0${fecha.getMinutes() }`;
    const segundos = (String(fecha.getSeconds()).length ==2) ? fecha.getSeconds() : `0${fecha.getSeconds() }`;
    
    document.querySelector("#hora p:nth-child(1)").innerHTML = diat;
    document.querySelector("#hora p:nth-child(2)").innerHTML = horas;
    document.querySelector("#hora p:nth-child(3)").innerHTML = minutos;
    document.querySelector("#hora p:nth-child(4)").innerHTML = segundos;


},1000); 