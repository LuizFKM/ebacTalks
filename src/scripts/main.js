AOS.init();

const dataDoEvento = new Date("Jun 14, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciAteOEvento % minutoEmMs) / 1000);

    document.querySelector('.contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.contador').innerHTML = 'Evento Expirado'
    }
}, 1000);