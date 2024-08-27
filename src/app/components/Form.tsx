"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { api } from '@/src/app/api/api'

const formSchema = z.object({
    name: z.string().min(2, 'O nome precisa ter mais que 2 caracteres.'),
    email: z.string().email('E-mail inválido.'),
    phone: z.string().min(10, 'Número inválido.'),
})

export const MainForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '', email: '', phone: '' },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!values.name || values.name.trim() === '') return false
        if (!values.email || values.email.trim() === '') return false
        if (!values.phone || values.phone.trim() === '') return false

        const response = await api.post('/data', {
            name: values.name,
            email: values.email,
            phone: values.phone
        })

        values.name = ''
        values.email = ''
        values.phone = ''
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 mt-72 border rounded-md flex flex-col gap-8 bg-[#F6EFEE] min-w-[300px] min-[400px]:min-w-[390px] xl:w-[500px]">
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-md">E-mail</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-bold text-md">Telefone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Digite seu telefone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <Button type="submit" className="bg-red-600">Cadastrar</Button>
            </form>
        </Form>
    )
}
