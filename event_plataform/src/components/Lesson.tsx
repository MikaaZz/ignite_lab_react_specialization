import { CheckCircle , Lock } from "phosphor-react";
import { isPast } from 'date-fns'
import { format } from "date-fns/esm";
import ptBR from 'date-fns/locale/pt-BR'

interface LessonPros {
    title: string;
    slug: string;
    availabelAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonPros) {
    const isLessonAvalable = isPast(props.availabelAt);
    const availabelDateFormatted = format(props.availabelAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return (
        <a href="#">
            <span className="text-gray-300">
                {availabelDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvalable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}



                    <span className="uppercase text-xs rounded py-[0.125rem] px-2 text-white border-green-300 font-bold">
                        {props.type === 'live' ? 'Ao vivo' : 'Aula prática'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}