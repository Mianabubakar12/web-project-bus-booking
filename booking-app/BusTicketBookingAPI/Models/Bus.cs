namespace BusTicketBookingAPI.Models
{
    public class Bus
    {
        public int Id { get; set; }
        public required string Name { get; set; }  // Add 'required' to avoid warnings
        public int Capacity { get; set; }
    }
}
