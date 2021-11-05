# from .models import UserAccount
# from .serializer import UserCreateSerializer
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# # from rest_framework.views import APIView
# # from rest_framework.authentication import TokenAuthentication
# # from rest_framework.permissions import IsAuthenticated

# @api_view(['POST'])
# def user(request):
# 	# email = request.data['email']
# 	userAccount = UserAccount.objects.all()
# 	serializer = UserCreateSerializer(userAccount, many=True)
# 	return Response(serializer.data, status=200)