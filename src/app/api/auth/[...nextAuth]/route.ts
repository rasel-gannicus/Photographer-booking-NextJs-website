import authOptions from "@/utils/NextAuth/authOptions"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)
