<template>
  <div>
    <b-row>
      <p id="paymentNotes">Se cobra el 15% del servicio por adelantado al momento de hacer la reserva.
        <br>Este monto es reembolsable si se cancela la sesión con mínimo 24h de antelación.
        <br>El estudio puede cancelar o posponer la reserva en caso de existencia de condiciones adversas para la sesión. En caso de cancelar se devuelve íntegramente el monto cancelado al momento de reservar.
      </p>
    </b-row>
    <h5>Plataformas para efectuar los pagos</h5>
    <p id="platformText">Seleccione la plataforma con la que le sea más conveniente realizar el pago solicitado</p>
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm-auto">
        <a href="#">Transfermovil</a>
      </div>
      <div class="col-sm-auto">
        <a href="#">Bitcoin wallet</a>
      </div>
      <div class="col-sm-auto">
        <a href="https://qvapay.com/payme/luismadf95" target="_blank">Qvapay</a>
      </div>
      <div class="col-sm"></div>
    </div>
    <b-button class="my-2" disabled>Reservar</b-button>
  </div>
</template>

<script lang="ts"></script>

<style>
h5 {
  text-align: left !important;
  margin-left: 5px;
}
#platformText {
  text-align: left !important;
  margin-left: 5px;
}
#paymentNotes {
  text-align: left !important;
  font-size: 10px;
  font-style: italic;
  margin-left: 5px;
}
</style>