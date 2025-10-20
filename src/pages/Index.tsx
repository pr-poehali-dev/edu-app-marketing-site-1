import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Умное обучение',
      description: 'ИИ-алгоритмы адаптируют материал под ваш темп и стиль обучения',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Calendar',
      title: 'Планировщик',
      description: 'Организуйте расписание занятий, экзаменов и дедлайнов в одном месте',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Users',
      title: 'Совместная учёба',
      description: 'Создавайте группы, обменивайтесь конспектами и готовьтесь вместе',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Trophy',
      title: 'Геймификация',
      description: 'Зарабатывайте баллы, получайте достижения и соревнуйтесь с друзьями',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '500K+', label: 'Студентов' },
    { value: '4.9★', label: 'Рейтинг' },
    { value: '50+', label: 'Университетов' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Студентка МГУ',
      text: 'Это приложение изменило мой подход к учёбе. Средний балл вырос с 3.5 до 4.8!',
      avatar: '👩‍🎓'
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Студент МФТИ',
      text: 'Планировщик задач и напоминания спасают меня каждую сессию. Рекомендую!',
      avatar: '👨‍💻'
    },
    {
      name: 'Мария Сидорова',
      role: 'Студентка ВШЭ',
      text: 'Совместная работа над проектами стала намного проще. Отличный инструмент!',
      avatar: '👩‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">StudyApp</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Скачать</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Войти
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-primary/30">
            <span className="text-sm font-medium text-primary">📱 Доступно для iOS и Android</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
            Учись <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">эффективнее</span>
            <br />с StudyApp
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Всё для успешной учёбы в одном приложении: расписание, конспекты, 
            планировщик задач и совместная работа с однокурсниками
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-effect">
              <Icon name="Apple" className="mr-2" size={20} />
              App Store
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-effect">
              <Icon name="Smartphone" className="mr-2" size={20} />
              Google Play
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё что нужно для учёбы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты для организации учебного процесса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:glow-effect transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
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

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Организуйте учёбу как профи
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Управление задачами</h3>
                    <p className="text-muted-foreground">Создавайте списки дел, устанавливайте приоритеты и отслеживайте прогресс</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Bell" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Умные напоминания</h3>
                    <p className="text-muted-foreground">Никогда не пропускайте важные дедлайны и занятия</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Аналитика прогресса</h3>
                    <p className="text-muted-foreground">Отслеживайте успеваемость и находите точки роста</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <img
                src="https://cdn.poehali.dev/projects/281d8671-2e4f-4ce7-bbac-fe1d49e7d7cb/files/b7864930-eb65-49ad-bc16-c38a0e0761ba.jpg"
                alt="App Screenshot"
                className="relative rounded-3xl glass-effect w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят студенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые улучшили свою успеваемость
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 glass-effect">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <Card className="p-12 md:p-16 glass-effect glow-effect text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните учиться эффективнее уже сегодня
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Скачайте приложение бесплатно и получите доступ ко всем функциям
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-effect">
                <Icon name="Apple" className="mr-2" size={20} />
                Скачать для iOS
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-effect">
                <Icon name="Smartphone" className="mr-2" size={20} />
                Скачать для Android
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ✓ Бесплатно навсегда  ✓ Без рекламы  ✓ Синхронизация между устройствами
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={16} />
                </div>
                <span className="text-lg font-bold">StudyApp</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшее приложение для организации учебного процесса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 StudyApp. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
