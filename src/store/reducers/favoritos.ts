import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'Favoritos',
  initialState,
  reducers: {
    addFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const existingIndex = state.itens.findIndex(
        (item) => item.id === produto.id
      )

      if (existingIndex !== -1) {
        state.itens.splice(existingIndex, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
