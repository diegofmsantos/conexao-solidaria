"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export const MainForm = () => {

    const form = useForm()

    return (
        <Form {...form}>
            <form style={{ backgroundImage: `` }} className="p-4 rounded-md flex flex-col gap-8 bg-white/90 lg:w-[400px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-md">Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu nome" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="addres"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-md">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-md">Telefone</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu telefone" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-red-600">Cadastrar</Button>
            </form>
        </Form>
    )
}
