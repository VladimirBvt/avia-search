import { createAction } from "@reduxjs/toolkit";

export const getData = createAction("getData");

export const sortAscendingPrice = createAction("sortAscendingPrice"); // сортировка по возрастанию цены

export const sortDescendingPrice = createAction("sortDescendingPrice"); // сортировка по убыванию цены

export const sortTravelTime = createAction("sortTravelTime"); // сортировка по времени пути

export const filterStop = createAction("filterStop"); // фильтр по наличию пересадки

export const filterMinPrice = createAction("filterMinPrice"); // фильтр по введенной минимальной цены

export const filterMaxPrice = createAction("filterMaxPrice"); // фильтр по введенной максимальной цены

export const filterAirlines = createAction("filterAirlines"); // фильтр по авиакомпании
