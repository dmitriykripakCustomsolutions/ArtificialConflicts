using System;

namespace ArtificialConflicts
{
	public class WeatherForecast
	{
		public DateTime Date { get; set; }

		public int TemperatureC { get; set; }

		public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

		public string Summary { get; set; }
		public double TemperatureK { get; set; }		 
		public string Sign { get; set; }
	}
}
