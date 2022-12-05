using Microsoft.AspNetCore.Mvc;
using backend.Service;

namespace backend.Controllers;

[ApiController]
[Route("api/transactions")]
public class TransactionController : ControllerBase
{

    private readonly ILogger<TransactionController> _logger;

    private readonly ITransactionService _service;

    public TransactionController(ILogger<TransactionController> logger, ITransactionService service)
    {
        _logger = logger;
        _service = service;
    }

    [HttpGet("{id}",Name = "GetTransaction")]
    public TransactionViewModel GetTransaction(int id)
    {
        return _service.GetTransactionById(id);
    
    }
    [HttpGet(Name = "GetAllTransactions")]  
    public List<TransactionViewModel> GetAllTransactions()
    {
        return _service.GetAllTransactions();
    }
}
