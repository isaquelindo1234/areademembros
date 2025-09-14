import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function TestimonialSection() {
    const testimonialWoman = PlaceHolderImages.find(p => p.id === 'testimonial-woman');
    const testimonialMan = PlaceHolderImages.find(p => p.id === 'testimonial-man');

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                Para você que tem sofrendo, eu sei que você não consegue parar de pensar nele... Eu sei como é... você passa o dia inteiro pensando nele, nas mensagens que vocês trocavam, nos momentos que vocês passaram juntos...
              </p>
              <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                Você olha o celular mil vezes esperando uma mensagem dele... verifica o WhatsApp para ver se ele está online... stalka ele nas redes sociais...
              </p>
              <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                Você não consegue se concentrar no trabalho, não consegue dormir direito, não tem vontade de fazer nada... é como se uma parte de você tivesse sido arrancada.
              </p>
              <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                Eu entendo perfeitamente como você está se sentindo porque eu já passei por isso.
              </p>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="max-w-md mx-auto lg:ml-0">
                {testimonialWoman && (
                    <Image
                        src={testimonialWoman.imageUrl}
                        alt={testimonialWoman.description}
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        style={{width: '85%'}}
                        data-ai-hint={testimonialWoman.imageHint}
                    />
                )}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
            <p className="text-muted-foreground font-light font-['Poppins'] text-lg">Deu tudo certo comigo assim que usei as técnicas. Eu até me lembro...</p>
            <h3 className="text-white text-2xl font-semibold font-['Poppins'] mt-6 mb-8">
                Eu sei exatamente como você se sente...<br/>
                eu já passei por isso!
            </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                 <div className="space-y-6">
                    <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                        Há alguns meses, eu estava exatamente na sua posição. Minha namorada havia terminado comigo e eu não sabia o que fazer. Me sentia perdido, rejeitado e com o coração partido.
                    </p>
                    <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                        Tentei várias estratégias que encontrei na internet, mas nada funcionava. Na verdade, algumas coisas que fiz só pioraram a situação e a afastaram ainda mais de mim.
                    </p>
                    <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                        Foi então que descobri os segredos que mudaram tudo. Apliquei exatamente o que aprendi e em poucos dias ela começou a demonstrar interesse novamente. Hoje estamos mais unidos que nunca!
                    </p>
                    <p className="text-muted-foreground font-light font-['Poppins'] text-left leading-relaxed">
                        Se funcionou comigo, vai funcionar com você também. Confie no processo.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <div className="max-w-md mx-auto">
                    {testimonialMan && (
                         <Image
                            src={testimonialMan.imageUrl}
                            alt={testimonialMan.description}
                            width={400}
                            height={500}
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            style={{width: '85%'}}
                            data-ai-hint={testimonialMan.imageHint}
                        />
                    )}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
