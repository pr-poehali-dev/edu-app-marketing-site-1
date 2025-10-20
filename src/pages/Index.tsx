import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: 'Trophy',
      title: 'Система достижений',
      description: 'Получайте награды за успехи в учёбе. Разблокируйте уникальные значки и показывайте свои достижения друзьям.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Gamepad2',
      title: 'Игровые элементы',
      description: 'Учёба превращается в увлекательную игру. Набирайте опыт, повышайте уровень и соревнуйтесь с одноклассниками.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'Target',
      title: 'Ежедневные челленджи',
      description: 'Выполняйте задания каждый день, поддерживайте серию побед и получайте бонусы за стабильность.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Zap',
      title: 'Прогресс в реальном времени',
      description: 'Отслеживайте свой рост, анализируйте статистику и видите результаты мгновенно.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Повышение мотивации',
      stat: '+85%',
      description: 'Студенты занимаются на 85% чаще благодаря игровым элементам'
    },
    {
      icon: 'Brain',
      title: 'Лучшее усвоение',
      stat: '+60%',
      description: 'Материал запоминается на 60% эффективнее через игровой подход'
    },
    {
      icon: 'Users',
      title: 'Социальное обучение',
      stat: '2М+',
      description: 'Более 2 миллионов студентов учатся вместе в нашем сообществе'
    }
  ];

  const screenshots = [
    {
      url: 'https://cdn.poehali.dev/projects/281d8671-2e4f-4ce7-bbac-fe1d49e7d7cb/files/b7864930-eb65-49ad-bc16-c38a0e0761ba.jpg',
      title: 'Дашборд достижений'
    },
    {
      url: 'https://cdn.poehali.dev/projects/281d8671-2e4f-4ce7-bbac-fe1d49e7d7cb/files/fe6a6ffb-3a10-4c9f-8b22-749cc178dfd5.jpg',
      title: 'Профиль и прогресс'
    },
    {
      url: 'https://cdn.poehali.dev/projects/281d8671-2e4f-4ce7-bbac-fe1d49e7d7cb/files/6e51937d-dd41-4205-a853-60147f42e753.jpg',
      title: 'Лидерборд и челленджи'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#1a1a2e]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-glow">EduQuest</span>
          </div>
          <Button className="glass-effect hover:glow-effect transition-all">
            Скачать приложение
          </Button>
        </header>

        <section className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect">
              <span className="text-sm font-medium text-primary">🚀 Будущее образования уже здесь</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in-up">
              Учись играючи
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
              Превратите обучение в увлекательное приключение с игровыми элементами, 
              достижениями и системой прогресса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform">
                <Icon name="Download" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-effect hover:glow-effect transition-all">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Активных студентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Достижений получено</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Довольных пользователей</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Возможности приложения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Игровые механики и мотивационные инструменты для эффективного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 glass-effect cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeFeature === index ? 'glow-effect' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 animate-glow`}>
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 bg-gradient-to-b from-transparent to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Преимущества
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Доказанная эффективность игрового подхода к обучению
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 glass-effect text-center group hover:glow-effect transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                  <Icon name={benefit.icon} className="text-white" size={32} />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  {benefit.stat}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Скриншоты приложения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как выглядит обучение будущего
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl glass-effect hover:glow-effect transition-all duration-300 cursor-pointer"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{screenshot.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 md:p-16 glass-effect glow-effect text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать своё обучающее приключение?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к миллионам студентов, которые уже трансформировали своё обучение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform">
                <Icon name="Smartphone" className="mr-2" size={20} />
                Скачать для iOS
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 glow-effect hover:scale-105 transition-transform">
                <Icon name="Smartphone" className="mr-2" size={20} />
                Скачать для Android
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="relative py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={16} />
              </div>
              <span className="text-lg font-bold">EduQuest</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">Помощь</a>
              <a href="#" className="hover:text-primary transition-colors">Политика</a>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:glow-effect transition-all">
                <Icon name="Github" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:glow-effect transition-all">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:glow-effect transition-all">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 EduQuest. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
