import { ON_SELECT } from '../types/category'

export const select = (categoryId) => ({ type: ON_SELECT, categoryId })

const initialState = [
    { categoryId: 1, categoryName: "한식", selected: false },
    { categoryId: 2, categoryName: "양식", selected: false },
    { categoryId: 3, categoryName: "중식", selected: false },
    { categoryId: 4, categoryName: "일식", selected: false },
    { categoryId: 5, categoryName: "분식", selected: false },
    { categoryId: 6, categoryName: "테마별", selected: false },
    { categoryId: 7, categoryName: "기타", selected: false },
    { categoryId: 8, categoryName: "채식", selected: false }
]

export default function category(state = initialState, action) {
    switch (action.type) {
        case ON_SELECT:
            return state.map((element) => { 
                return {
                    ...element,
                    selected: element.categoryId === action.categoryId
                }
            })
        default:
            return state
    }
}
