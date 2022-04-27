using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] x = { 10, 20, 30, 40, 50 };
            int maior = 0;
            for (var i = 0; i < x.Length; i++)
            {
                if (x[i] > maior) 
                {
                    maior = x[i];
                }
            }
            Console.WriteLine(maior);
            Console.ReadLine();
            
        }
    }
}
