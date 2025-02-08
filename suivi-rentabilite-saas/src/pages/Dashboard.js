import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, BarChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from "recharts";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Upload, Download, Settings } from "lucide-react";

export default function Dashboard() {
  const [salesData, setSalesData] = useState([
    { mois: "Jan", profit: 500 },
    { mois: "Fév", profit: 700 },
    { mois: "Mar", profit: 900 }
  ]);

  const [stock, setStock] = useState([
    { name: "Chaussures Nike", price: 60, salePrice: 120 }
  ]);

  const addProduct = () => {
    setStock([...stock, { name: "Nouveau Produit", price: 0, salePrice: 0 }]);
  };

  const handleImportCSV = () => {
    console.log("Import CSV déclenché !");
  };

  const handleSyncAPI = () => {
    console.log("Synchronisation API en cours...");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-xl font-bold">Rentabilité & Performance</h2>
          <LineChart width={600} height={300} data={salesData}>
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" />
          </LineChart>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Gestion des Stocks</h2>
          <Button className="mt-2" onClick={addProduct}>Ajouter un Produit</Button>
          <ul>
            {stock.map((item, index) => (
              <li key={index}>{item.name} - Achat: {item.price}€ / Vente: {item.salePrice}€</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-xl font-bold">Importation des Ventes</h2>
          <div className="flex gap-4">
            <Button variant="outline" onClick={handleImportCSV}><Upload className="w-5 h-5" /> Importer CSV</Button>
            <Button variant="outline" onClick={handleSyncAPI}><Download className="w-5 h-5" /> Synchroniser API</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}