import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // add your session handling logic here if needed
      return session;
    },
    async signIn({ profile }) {
      // add signIn logic if needed
      return true;
    },
  },
});

export { handler as GET, handler as POST };
