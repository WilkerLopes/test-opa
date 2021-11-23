<template>
  <v-container grid-list-xs>
    <v-card class="rounded-lg" elevation="4" width="100%">
      <v-card-title primary-title class="pb-0"> Interligação </v-card-title>
      <v-card-text class="pa-4 pt-0">
        <p>Informe os intervalos para saber se eles são interligados</p>
        <v-divider class="my-6"></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-card width="100%" height="100%" elevation="0">
              <v-card-text>
                <div>Intervalo A</div>
                <v-row>
                  <v-col> <v-text-field v-model="intervaloA[0]" type="number" label="Inicio" outlined></v-text-field> </v-col>
                  <v-col> <v-text-field v-model="intervaloA[1]" type="number" label="Fim" outlined></v-text-field> </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" class="col-sm-12">
            <v-card width="100%" height="100%" elevation="0">
              <v-card-text>
                <div>Intervalo B</div>
                <v-row>
                  <v-col> <v-text-field v-model="intervaloB[0]" type="number" label="Inicio" outlined></v-text-field> </v-col>
                  <v-col> <v-text-field v-model="intervaloB[1]" type="number" label="Fim" outlined></v-text-field> </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center justify-center pt-0">
            <v-btn color="primary" @click="checkValues()">Verificar</v-btn>
          </v-col>
        </v-row>
        <v-row v-if="result !== null">
          <v-col>
            <div class="d-flex align-center justify-center">{{ result }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import ListService from "../service/ListService"

  export default {
    name: "Interlace",
    data() {
      return {
        intervaloA: [],
        intervaloB: [],
        result: null,
      }
    },
    methods: {
      async checkValues() {
        var intervalos = {
          intervaloA: this.intervaloA,
          intervaloB: this.intervaloB,
        }

        var result = await ListService.interlace(intervalos)

        this.result = result.isInterlace
      },
    },
  }
</script>

<style lang="scss" scoped>
  .lines {
    height: 50px;
    border-radius: 8px;
    position: relative;
    background-color: #444cf710;
    .line-a,
    .line-b {
      height: 100%;
      position: absolute;
      top: 0;
      width: 50px;
      background-color: #444cf7;
      color: #fafaff;
      font-weight: 700;
      font-size: 1.25em;
    }
  }
</style>
