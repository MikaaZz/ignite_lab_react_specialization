import { CheckCircle, Lock } from "phosphor-react";
import { isPast } from 'date-fns'
import { format } from "date-fns/esm";
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface LessonPros {
    title: string;
    slug: string;
    availabelAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonPros) {

    const { slug } = useParams<{ slug: string }>()

    const isLessonAvalable = isPast(props.availabelAt);
    const availabelDateFormatted = format(props.availabelAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">

            <span className="text-gray-300">
                {availabelDateFormatted}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                    'bg-green-500': isActiveLesson,
                })}
            >
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

                <strong className={classNames('text-gray-200 mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200 ' : !isActiveLesson,
                })}>
                    {props.title}
                </strong>

            </div>

        </Link>
    )
}