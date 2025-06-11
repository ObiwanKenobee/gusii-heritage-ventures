
export const Heritage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            The Abagusii People
          </h2>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Known traditionally as the Kisii people, the Abagusii are a Bantu community 
            renowned for their skilled craftsmanship, particularly in soapstone carving, 
            and their rich agricultural traditions in the highlands of Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🏺</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Soapstone Mastery</h3>
            <p className="text-amber-800 leading-relaxed">
              The Abanchari clan's expertise in quarrying and carving soapstone has been 
              passed down through generations, creating beautiful sculptures and functional items.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-orange-700 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🌾</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Agricultural Heritage</h3>
            <p className="text-orange-800 leading-relaxed">
              Traditional farming practices and innovative agricultural techniques have 
              sustained the community for centuries in the fertile highlands.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-2xl font-bold text-red-700 mb-4">Oral Traditions</h3>
            <p className="text-red-800 leading-relaxed">
              Rich storytelling traditions, proverbs, and historical accounts preserve 
              the wisdom and experiences of generations past.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
