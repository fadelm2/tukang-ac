import React, { useState } from 'react';
import { Phone, Mail, MapPin, Wrench, Droplets, Settings, Clock, CheckCircle2, Star, Wind, Shield, Snowflake } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { mockData } from '../utils/mockData';
import { toast } from 'sonner';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Terima kasih! Kami akan menghubungi Anda segera.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-8 w-8 text-cyan-600" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">AC Pro Indonesia</h1>
                <p className="text-xs text-slate-600">Teknisi AC Profesional</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-700 hover:text-cyan-600 transition-colors">Layanan</a>
              <a href="#pricing" className="text-slate-700 hover:text-cyan-600 transition-colors">Harga</a>
              <a href="#brands" className="text-slate-700 hover:text-cyan-600 transition-colors">Merk</a>
              <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition-colors">Kontak</a>
            </nav>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold">
                Tersedia 24/7 untuk Anda
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Layanan AC Profesional <span className="text-cyan-600">Terpercaya</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Instalasi, perbaikan, dan perawatan AC untuk rumah dan kantor Anda. Teknisi berpengalaman, harga transparan, garansi terjamin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg">
                  Pesan Sekarang
                  <Clock className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 px-8 py-6 text-lg">
                  Konsultasi Gratis
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-900">10K+</div>
                  <div className="text-slate-600">AC Terpasang</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-slate-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">4.9/5</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <Snowflake className="h-48 w-48 text-cyan-600 animate-pulse" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-cyan-600" />
                  <div>
                    <div className="font-bold text-slate-900">Garansi Resmi</div>
                    <div className="text-sm text-slate-600">1 Tahun Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan AC Anda dengan teknisi bersertifikat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader>
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    {service.icon === 'settings' && <Settings className="h-7 w-7 text-cyan-600" />}
                    {service.icon === 'wrench' && <Wrench className="h-7 w-7 text-cyan-600" />}
                    {service.icon === 'droplets' && <Droplets className="h-7 w-7 text-cyan-600" />}
                    {service.icon === 'clock' && <Clock className="h-7 w-7 text-cyan-600" />}
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Harga Transparan</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tidak ada biaya tersembunyi. Harga sudah termasuk material dan garansi
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mockData.pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-cyan-600 shadow-xl' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">/unit</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className={`w-full mb-6 ${plan.popular ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                    Pilih Paket
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Merk AC Yang Kami Tangani</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Berpengalaman dengan berbagai merk AC ternama
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {mockData.brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
                <span className="text-lg font-semibold text-slate-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Testimoni Pelanggan</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Apa kata pelanggan kami tentang layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-slate-700 italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
              <p className="text-xl text-slate-600 mb-8">
                Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan AC Anda
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Telepon / WhatsApp</div>
                    <div className="text-slate-600">+62 812-3456-7890</div>
                    <div className="text-sm text-cyan-600">Tersedia 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email</div>
                    <div className="text-slate-600">info@acproindonesia.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Alamat</div>
                    <div className="text-slate-600">Jl. Teknologi No. 123, Jakarta Selatan</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>Isi form di bawah dan kami akan segera menghubungi Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Nomor Telepon"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="service"
                      placeholder="Layanan yang Dibutuhkan"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Pesan Anda"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wind className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-bold">AC Pro Indonesia</h3>
                  <p className="text-sm text-slate-400">Teknisi AC Profesional</p>
                </div>
              </div>
              <p className="text-slate-400">
                Layanan AC terpercaya dengan teknisi berpengalaman untuk seluruh Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Instalasi AC</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Service AC</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cuci AC</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Bongkar Pasang</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tim Kami</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+62 812-3456-7890</li>
                <li>info@acproindonesia.com</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 AC Pro Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;