"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/footer";

export default function FindYourFood() {
    const [selectedMood, setSelectedMood] = useState<string>("");
    const [foodType, setFoodType] = useState<string>("");
    const [dietaryRestriction, setDietaryRestriction] = useState<string>("none");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<{
        foodSuggestion: string;
        explanation: string;
    } | null>(null);

    const handleSubmit = async () => {
        if (!selectedMood) {
            alert("Silakan pilih mood kamu terlebih dahulu!");
            return;
        }

        setIsLoading(true);
        try {
            const prompt = `As a food recommendation expert, suggest a food based on the following criteria:
                - Mood: ${selectedMood}
                - Food Type: ${foodType || "Any"}
                - Dietary Restriction: ${dietaryRestriction}
                Please provide the response in Indonesian language with this JSON format:
                {
                    "foodSuggestion": "Name of the food",
                    "explanation": "Why this food matches the mood and criteria (2-3 sentences)",
                }`;

            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            setResult(JSON.parse(data.response));
        } catch (error) {
            console.error('Error:', error);
            alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>

            <main className="min-h-screen relative">
                <div className="relative z-10 pt-36 overflow-hidden">
                    {/* <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('/landingpage-photo.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/20" />
                    </div> */}
                    <PageBackground />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl text-balance text-white">
                            Bagaimana cara kerjanya?
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>1. Pilih Mood</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Pilih mood yang sedang kamu rasakan saat ini.</p>
                                </CardContent>
                            </Card>
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>2. Pilih Jenis Makanan <span className="text-xs text-gray-400 font-normal">(Opsional)</span></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Tentukan jenis makanan yang kamu inginkan untuk mempersempit rekomendasi.</p>
                                </CardContent>
                            </Card>
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Mode Diet / Alergi?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Sesuaikan dengan kebutuhan diet atau alergi yang kamu miliki.</p>
                                </CardContent>
                            </Card>
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Dapatkan Rekomendasi</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Setelah memilih preferensi, kami akan mencarikan rekomendasi makanan terbaik untukmu.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                    {/* Mood Selection */}
                    <div className="flex gap-8 flex-wrap md:flex-nowrap">
                        {/* Left side - Form */}
                        <div className="w-full md:w-2/3 space-y-8">
                            {/* Mood Selection */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Pilih Mood Kamu</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {moods.map((mood) => (
                                        <div
                                            key={mood.name}
                                            onClick={() => setSelectedMood(mood.name)}
                                            className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors ${selectedMood === mood.name ? 'bg-accent border-[#799122]' : ''
                                                }`}
                                        >
                                            <span className="text-xl">{mood.emoji}</span>
                                            <span>{mood.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Food Type */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Jenis Makanan <span className="text-xs text-gray-400 font-normal">(Opsional)</span></h2>
                                <Input
                                    type="text"
                                    value={foodType}
                                    onChange={(e) => setFoodType(e.target.value)}
                                    placeholder="Contoh: Makanan Indonesia, Berkuah, Mie"
                                    className="max-w-xl"
                                />
                            </div>

                            {/* Diet/Allergy */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Mode Diet / Alergi</h2>
                                <RadioGroup
                                    value={dietaryRestriction}
                                    onValueChange={setDietaryRestriction}
                                    defaultValue="none"
                                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                                >
                                    <Label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="none" id="none" />
                                        <span>Tidak Ada</span>
                                    </Label>
                                    <Label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="vegetarian" id="vegetarian" />
                                        <span>Vegetarian</span>
                                    </Label>
                                    <Label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="vegan" id="vegan" />
                                        <span>Vegan</span>
                                    </Label>
                                    <Label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="gluten-free" id="gluten-free" />
                                        <span>Gluten Free</span>
                                    </Label>
                                    <Label className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="dairy-free" id="dairy-free" />
                                        <span>Dairy Free</span>
                                    </Label>
                                </RadioGroup>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    className="bg-[#799122] hover:bg-[#799122]/90 text-white px-8 py-6 text-lg"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Mencari..." : "Temukan Makananmu"}
                                </Button>
                            </div>
                        </div>

                        {/* Right side - Result */}
                        <div className="w-full md:w-1/3">
                            <div className="sticky top-24 bg-white rounded-lg border p-6 space-y-4">
                                <h2 className="text-2xl font-semibold">Hasil Rekomendasi</h2>
                                {isLoading ? (
                                    <div className="text-gray-600">
                                        Sedang mencari rekomendasi terbaik untukmu...
                                    </div>
                                ) : result ? (
                                    <div className="space-y-4">
                                        <div>
                                            <p>
                                                Mood : {selectedMood}
                                            </p>
                                            {foodType && <p>
                                                Jenis Makanan : {foodType}
                                            </p>
                                            }
                                            <p>
                                                Mode Diet / Alergi : {dietaryRestriction}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{result.foodSuggestion}</h3>
                                            <p className="text-gray-600 mt-2">{result.explanation}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-600">
                                        Hasil rekomendasi makanan akan muncul di sini setelah kamu mengisi preferensi di sebelah kiri.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

const moods = [
    { name: "Senang", emoji: "😊" },
    { name: "Sedih", emoji: "😢" },
    { name: "Gembira", emoji: "🤩" },
    { name: "Stressed", emoji: "😰" },
    { name: "Santai", emoji: "😌" },
    { name: "Energetik", emoji: "⚡" },
    { name: "Capek", emoji: "😴" },
    { name: "Lapar", emoji: "😋" },
];
