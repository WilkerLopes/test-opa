<template>
  <v-container grid-list-xs>
    <v-card class="rounded-lg" elevation="8" width="100%">
      <v-card-title primary-title class="pb-0"> Ordenação </v-card-title>
      <v-card-text class="pa-4 pt-0">
        <p>Informe os valores das listas a serem ordenados, a cada valor, dê um enter</p>
        <v-divider class="my-6"></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-card width="100%" height="100%" elevation="0">
              <v-card-text class="pb-0">
                <p class="text-center">Entrada</p>
                <v-textarea v-model="salaN" outlined name="input-numbers" label="Números"></v-textarea>
                <v-textarea v-model="salaS" outlined name="input-text" label="Textos"></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card width="100%" height="100%" elevation="0">
              <v-card-text class="pb-0">
                <p class="text-center">Resultado</p>
                <v-textarea v-model="result.salaN" readonly outlined name="result-numbers" label="Números"></v-textarea>
                <v-textarea v-model="result.salaS" readonly outlined name="result-text" label="Textos"></v-textarea
              ></v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <v-switch v-model="tipo" label="Ordem descrescente" class="ma-0 px-4"></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center justify-center">
            <v-btn color="primary" @click="ordenar()">Ordernar Listas</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import ListService from "../service/ListService"

  export default {
    name: "Ordena",
    data() {
      return {
        salaN: "",
        salaS: "",
        result: {
          salaN: "",
          salaS: "",
        },
        tipo: false,
      }
    },
    methods: {
      async ordenar() {
        var listas = {
          salaN: this.salaN.split("\n").filter((val) => {
            return Boolean(val)
          }),
          salaS: this.salaS.split("\n").filter((val) => {
            return Boolean(val)
          }),
        }

        for (const index in listas.salaN) {
          listas.salaN[index] = parseInt(listas.salaN[index])
        }

        var result = await ListService.ordenaLista({ listas: listas, tipo: this.tipo ? "desc" : "asc" })
        this.result = {
          salaN: result.listas.salaN.join("\n"),
          salaS: result.listas.salaS.join("\n"),
        }
      },
    },
  }
</script>
<style lang="sass" scoped></style>
