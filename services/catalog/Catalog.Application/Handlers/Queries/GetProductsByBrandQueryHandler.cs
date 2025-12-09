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
    public class GetProductsByBrandQueryHandler : IRequestHandler<GetProductsByBrandQuery, IList<ProductReponseDto>>
    {
        private readonly IProductRepositorycs _productRepository;
        private readonly IMapper _mapper;

        public GetProductsByBrandQueryHandler(
            IProductRepositorycs ProductRepository,
            IMapper mapper
            )
        {
            _productRepository = ProductRepository;
            _mapper = mapper;
        }
        public async Task<IList<ProductReponseDto>> Handle(GetProductsByBrandQuery request, CancellationToken cancellationToken)
        {
            var products = await _productRepository.GetAllProductsByBrand(request.BrandName);

            var productResponseList = _mapper.Map<IList<ProductReponseDto>>(products);

            return productResponseList;
        }
    }
    }

