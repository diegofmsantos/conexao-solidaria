"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { api } from '@/src/app/api/api'

const formSchema = z.object({
    nome: z.string().min(2, 'O nome precisa ter mais que 2 caracteres.'),
    email: z.string().email('E-mail inválido.'),
    telefone: z.string().min(10, 'Número inválido.'),
})

export const Contato = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { nome: '', email: '', telefone: '' },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await api.post('/Visitante/', {
                nome: values.nome,
                email: values.email,
                telefone: values.telefone
            })
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error)
        }
    }

    return (
        <div className="flex flex-col justify-center py-10 items-center px-4 min-h-screen w-screen bg-[#57CC99] md:px-10 xl:justify-around xl:flex-row">
            <div className="max-w-[700px] flex flex-col gap-4 mb-8 xl:gap-10">
                <div className="text-4xl text-white font-bold text-center md:text-5xl">DESEJA SER UM AGENTE PARA A MUDANÇA NO SEU BAIRRO?</div>
                <div className="text-2xl text-white text-center md:text-3xl">Cadastre-se para receber novidades sobre nosso projeto de ações solidárias, e ajude  a fazer a diferença na sua comunidade!</div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 p-4 border rounded-md flex flex-col gap-8 bg-[#F6EFEE] w-72 max-w-[700px] min-[400px]:min-w-[390px] xl:w-[500px]">
                    <FormField
                        control={form.control}
                        name="nome"
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
                        name="telefone"
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
                    <Button type="submit" className="bg-[#DB2763] text-xl font-bold h-12">Cadastrar</Button>
                </form>
            </Form>
        </div>
    )
}
