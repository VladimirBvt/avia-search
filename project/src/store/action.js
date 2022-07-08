import { createAction } from "@reduxjs/toolkit";

export const showMore = createAction("showMore"); // показать больше

export const sortAscendingPrice = createAction("sortAscendingPrice"); // сортировка по возрастанию цены

export const sortDescendingPrice = createAction("sortDescendingPrice"); // сортировка по убыванию цены

export const sortTravelTime = createAction("sortTravelTime"); // сортировка по времени пути

export const filterStop = createAction("filterStop"); // фильтр по наличию пересадки

export const filterPrice = createAction("filterPrice"); // фильтр по введенному диапазону цен

export const filterAirlines = createAction("filterAirlines"); // фильтр по авиакомпании
