export type User= {
    id: number,
    image?: string,
    name: string,
    email: string,
    password: string, 
    createdAt: Date
}

export type SignUp= Omit<User, "id" | "createdAt"> & {confirmPassword?: string}

export type InsertUser= Omit<User, "id" | "createdAt">