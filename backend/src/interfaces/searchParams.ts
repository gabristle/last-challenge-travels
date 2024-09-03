export interface SearchParams {
    name?: string
    categoriesId?: string | null
    maxCost?: number
    destinationsId?: string | null
    grades?: string | null
    sort?: 'title' | 'cost'
}