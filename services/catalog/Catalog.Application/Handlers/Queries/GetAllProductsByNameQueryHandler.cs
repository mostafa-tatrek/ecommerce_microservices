using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Catalog.Application.Queries;
using Catalog.Application.Responses;
using Catalog.Core.Repositories;
using MediatR;

namespace Catalog.Application.Handlers.Queries
{
    public class GetAllProductsByNameQueryHandler : IRequestHandler<GetProductsByNameQuery, IList<ProductReponseDto>>
    {
        private readonly IProductRepositorycs _productRepository;
        private readonly IMapper _mapper;

        public GetAllProductsByNameQueryHandler(
            IProductRepositorycs productRepository,
            IMapper mapper
            )
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }
        public async Task<IList<ProductReponseDto>> Handle(GetProductsByNameQuery request, CancellationToken cancellationToken)
        {
            var productList = await _productRepository.GetAllProductsByName(request.Name);
            var productListReponse = _mapper.Map<IList<ProductReponseDto>>(productList);
            return productListReponse;
        }
    }
}
